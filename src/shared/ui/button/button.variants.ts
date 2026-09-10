import { tv, type VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
    base: 'cursor-pointer duration-250 rounded-[4px] border border-transparent max-lg:text-xs hover:bg-grey-100 hover:text-green-300 hover:border hover:border-green-300',
    variants: {
        variant: {
            dark: 'text-grey-100 bg-green-300',
            light: 'text-green-300 bg-grey-100'
        },
        size: {
            normal: 'py-3 px-6 max-lg:p-2 max-lg:px-4',
            big: 'py-4 px-9'
        }
    }
})

export type ButtonVariants = VariantProps<typeof buttonVariants>