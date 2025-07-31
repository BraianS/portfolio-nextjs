
interface TitleProps {
    title: string;
}

export function Title({title}: TitleProps) {

    return (
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{title}</h1>
    )
    
}