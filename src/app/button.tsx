import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export default function GoToButton(props: {href: Url, img?: string, text: String, type?: Number}){
    let cls = ""
    if (props?.type == 1) {
        cls = "now"
    }
    if (props?.img){
        return <Link href={props.href} className={cls+" button"}><img src={props.img}/> {props.text} </Link>
    }else{
        return <Link href={props.href} className={cls+" button"}> {props.text} </Link>
    }
}

export function Button(props: {run: Function , img?: string, text: String, type?: Number}){
    let cls = ""
    if (props?.type == 1) {
        cls = "now"
    }
    
    if (props?.img){
        return <button onClick={() => "run()"} className={cls+" button"}><img src={props.img}/> {props.text} </button>
    }else{
        return <button className={cls+" button"}> {props.text} </button>
    }
}