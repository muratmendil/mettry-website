import { cn } from "@/lib/cn";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export function Container({ children, className }: ContainerProps) {
    return (
        <div
            className={cn("w-full mx-auto", className)}
            style={{
                maxWidth: "var(--max-w)",
                paddingLeft: "var(--gutter-x)",
                paddingRight: "var(--gutter-x)",
            }}
        >
            {children}
        </div>
    );
}