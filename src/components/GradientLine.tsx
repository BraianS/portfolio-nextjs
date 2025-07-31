interface GradientLineProps {
    gradient?:boolean,
    height?:string,
    className?:string
}


export default function GradientLine({
  gradient = true,
  height = "h-1",
  className = ""
}: GradientLineProps) {
  return (
    <div 
      className={`w-full max-w-md ${height} rounded-full my-8 ${className}`}
      style={
        gradient 
          ? { background: 'linear-gradient(90deg, var(--color-acent-primary), var(--color-acent-secondary))' }
          : { backgroundColor: '#000000' }
      }
    />
  );
}