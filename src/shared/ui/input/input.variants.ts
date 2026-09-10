import { tv } from "tailwind-variants";

export const inputVariants = tv({
    base: 'border border-grey-100 py-3.5 px-4 rounded-lg flex text-grey-100',
    slots: {
        select: 'cursor-pointer items-center justify-between mb-2',
        dropList: 'bg-[rgba(189,189,189,0.6)] backdrop-blur-3xl absolute top-full left-0 right-0 mt-2 flex-col gap-2 ease-in-out transition-all max-h-34 overflow-y-auto',
    }
})