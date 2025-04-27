import { Box, Button, Checkbox, Collapse, FormControlLabel, Stack } from '@mui/material';
import { useState } from 'react';
import { useContentFilterStore } from './contentFilterer.store';

type Opt = {
    name: string;
    subOpt?: Opt[];
};

const mockOpts: Opt[] = [
    {
        name: "trendyol",
        subOpt: [
            { name: "bekleyen" },
            { name: "onaylanan" },
            { name: "iptal" },
        ]
    },
    {
        name: "getir",
        subOpt: [
            { name: "bekleyen" },
            { name: "onaylanan" },
            { name: "iptal" },
        ]
    }
];

const ContentFilterer = () => {
    const expanded = useContentFilterStore(state => state.expanded);
    const toggleMenuExpanded = useContentFilterStore(state => state.toggleMenuExpanded);

    const [openedOpts, setOpenedOpts] = useState<Record<string, boolean>>({});

    const handleOptionToggle = (name: string) => {
        setOpenedOpts(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };

    return (
        <Box sx={{
            height: expanded ? "auto" : "10px",
            bgcolor: "green",
            width: "100%",
            overflow: 'hidden',
            transition: 'height 0.3s ease',
            p: 2
        }}>
            <Stack direction="row">

                {mockOpts.map((opt, index) => (
                    
                    <Box key={index} sx={{ mb: 1 }}>
                        {/* Ana option */}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={!!openedOpts[opt.name]}
                                    onChange={() => handleOptionToggle(opt.name)}
                                    name={opt.name}
                                    value={opt.name}
                                />
                            }
                            label={opt.name}
                        />

                        {/* Sub Options */}
                        <Collapse in={openedOpts[opt.name]} timeout="auto" unmountOnExit>
                            {opt.subOpt?.map((sub, subIndex) => (
                                <FormControlLabel
                                    key={subIndex}
                                    control={<Checkbox name={sub.name} value={sub.name} />}
                                    label={sub.name}
                                    sx={{ ml: 4 }}
                                />
                            ))}
                        </Collapse>
                    </Box>
                ))}
            </Stack>

            <Button onClick={toggleMenuExpanded} sx={{ mt: 2, bgcolor: "white" }}>
                Toggle
            </Button>
        </Box>
    );
};

export default ContentFilterer;
