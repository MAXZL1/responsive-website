
import Link from "next/link";
export default function Footer () {
    return (
        <div className="footerfirst">
            <div className="footersecond">
                <ul>
                    <li> Made By Mustafa Ayyaz </li>
                    <li> <Link href={"https://github.com/MAXZL1"}> Github </Link>  </li>
                </ul>
            </div>
        </div>
    );
}
