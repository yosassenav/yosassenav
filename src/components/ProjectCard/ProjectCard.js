export default function ProjectCard({title, description}){
    return (
    <div className="flex flex-col border-solid border-2 max-w-md p-12">
        <div>{title}</div>
        <div>{description}</div>
        <div>Repository</div>
    </div>
)}