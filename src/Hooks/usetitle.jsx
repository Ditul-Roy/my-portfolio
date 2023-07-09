import { useEffect } from "react"

const useTitleBar = title =>{
    useEffect(()=>{
        document.title = `${title} - myPortfolio`
    },[title])
}
export default useTitleBar;