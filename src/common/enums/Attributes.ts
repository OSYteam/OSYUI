export enum Attributes {
    SIZE = 0,
    COLOR = 1,
    LENGTH = 2,
    WEIGHT = 3,
}

export enum AttributeSize {
    XS = 0,
    S = 1,
    M = 3,
    L = 4,
    XL = 5,
    XXL = 6,
}

export enum AttributeColor {
    RED = 0,
    BLUE = 1,
    BLACK = 2,
    WHITE = 3,
}

export const AttributeOptions = [
    {
        label: "Beden",
        value: Attributes.SIZE,
        values: [
            { label: "XS", value: AttributeSize.XS },
            { label: "S", value: AttributeSize.S },
            { label: "M", value: AttributeSize.M },
            { label: "L", value: AttributeSize.L },
            { label: "XL", value: AttributeSize.XL },
            { label: "XXL", value: AttributeSize.XXL },
        ],
    },
    {
        label: "Renk",
        value: Attributes.COLOR,
        values: [
            { label: "Kırmızı", value: AttributeColor.RED },
            { label: "Mavi", value: AttributeColor.BLUE },
            { label: "Siyah", value: AttributeColor.BLACK },
            { label: "Beyaz", value: AttributeColor.WHITE },
        ],
    },
    {
        label: "Uzunluk",
        value: Attributes.LENGTH,
        values: [
            { label: "1 Metre", value: "1M" },
            { label: "2 Metre", value: "2M" },
            { label: "3 Metre", value: "3M" },
        ],
    },
    {
        label: "Ağırlık",
        value: Attributes.WEIGHT,
        values: [
        ],
    },
];

