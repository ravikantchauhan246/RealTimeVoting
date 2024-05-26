interface PageProps{
    params:{
        topic:string
    }
}
const Page = ({params}:PageProps) =>{
    return <p>{params.topic}</p>
}

export default Page