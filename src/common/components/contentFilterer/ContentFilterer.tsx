import { Box, Button, Checkbox, Collapse, FormControlLabel, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useContentFilterStore } from './contentFilterer.store';

type Opt = {
    name: string;
    field?: string; // marketPlace veya, ödeme yöntemi
    subOpt?: Opt[];
};

interface ContentFiltererProps<T> {
    itemsForFiltering: T[];
    filterOptions: Opt[];
    setResult: (result: T[]) => void;
}

const ContentFilterer = <T,>({ itemsForFiltering, filterOptions, setResult }: ContentFiltererProps<T>) => {
    const expanded = useContentFilterStore(state => state.expanded);
    const toggleMenuExpanded = useContentFilterStore(state => state.toggleMenuExpanded);

    const [openedOpts, setOpenedOpts] = useState<Record<string, boolean>>({});
    const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

    const handleFilterChange = (category: string, value: string) => {
        setSelectedFilters(prev => {
            const currentValues = prev[category] || [];
            if (currentValues.includes(value)) {
                return {
                    ...prev,
                    [category]: currentValues.filter(v => v !== value),
                };
            } else {
                return {
                    ...prev,
                    [category]: [...currentValues, value],
                };
            }
        });
    };

    const handleOptionToggle = (name: string) => {
        setOpenedOpts(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };

    useEffect(() => {
        let filteredItems = [...itemsForFiltering];

        // her bir seçilmiş kategori için sırayla filtrele
        Object.entries(selectedFilters).forEach(([category, values]) => {
            if (values.length === 0) return;

            // ilgili field'ı bul
            const fieldPath = findFieldPathForCategory(filterOptions, category);

            if (fieldPath) {
                filteredItems = filteredItems.filter(item => {
                    const fieldValue = getFieldValue(item, fieldPath);
                    if (typeof fieldValue === "string") {
                        return values.some(val => fieldValue.toLowerCase().includes(val.toLowerCase()));
                    }
                    return false;
                });
            }
        });

        setResult(filteredItems);
    }, [selectedFilters, itemsForFiltering, setResult, filterOptions]);

    const findFieldPathForCategory = (opts: Opt[], category: string, parentFieldPath?: string): string | undefined => {
        for (const opt of opts) {
            const currentPath = opt.field || parentFieldPath;
            if (opt.name === category && currentPath) {
                return currentPath;
            }
            if (opt.subOpt) {
                const subPath = findFieldPathForCategory(opt.subOpt, category, currentPath);
                if (subPath) return subPath;
            }
        }
        return undefined;
    };

    const getFieldValue = (obj: any, fieldPath: string): any => {
        return fieldPath.split('.').reduce((acc, part) => acc?.[part], obj);
    };

    const findCategoryName = (opt: Opt): string => {
        if (filterOptions.some(top => top.name === opt.name)) {
            return opt.name;
        }
        for (const top of filterOptions) {
            if (top.subOpt?.some(sub => sub.name === opt.name)) {
                return top.name;
            }
            for (const sub of top.subOpt || []) {
                if (sub.subOpt?.some(deepSub => deepSub.name === opt.name)) {
                    return top.name;
                }
            }
        }
        return "";
    };


    const isSelected = (opt: Opt): boolean => {
        const parentCategory = findCategoryName(opt);
        return selectedFilters[parentCategory]?.includes(opt.name) ?? false;
    };

    const RecursiveCheckbox = ({ opt, level = 0 }: { opt: Opt, level?: number }) => {
        const hasSubOptions = !!opt.subOpt?.length;
        const selected = isSelected(opt);

        return (
            <Box sx={{ ml: level * 2, mb: 1 }}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={selected}
                            onChange={() => {
                                if (hasSubOptions) {
                                    handleOptionToggle(opt.name);
                                } else {
                                    handleFilterChange(findCategoryName(opt), opt.name);
                                }
                            }}
                            name={opt.name}
                            value={opt.name}
                        />
                    }
                    label={opt.name}
                />

                {hasSubOptions && (
                    <Collapse in={openedOpts[opt.name]} timeout="auto" unmountOnExit>
                        {opt.subOpt!.map((subOpt, index) => (
                            <RecursiveCheckbox key={index} opt={subOpt} level={level + 1} />
                        ))}
                    </Collapse>
                )}
            </Box>
        );
    };



    return expanded ? (
        <Box sx={{
            height: "auto",
            bgcolor: "whitesmoke",
            width: "100%",
            overflow: 'hidden',
            transition: 'height 0.3s ease',
            p: 2,
            borderRadius: 5
        }}>
            <Stack direction="row" flexWrap="wrap">
                {filterOptions.map((opt, index) => (
                    <RecursiveCheckbox key={index} opt={opt} />
                ))}
            </Stack>

            <Button onClick={toggleMenuExpanded} sx={{ bgcolor: "Highlight", mt: 2 }} size="small">
                Kapat
            </Button>
        </Box>
    ) : (
        <Button onClick={toggleMenuExpanded} color="inherit" size="small">
            Filtrele
        </Button>
    );
};

export default ContentFilterer;
