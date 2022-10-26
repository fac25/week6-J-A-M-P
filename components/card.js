import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Home.module.css"
// 1. [ ] Create Mock data object: id, title, author, genre, price, description [{}, {}, {}]
// 2. [X] Create function component 
// 3. [ ] Return html - card structure with example data
// 4. [ ] Populate card with mockdata above

// const mockData = [{ id: 1, src: '/images/east-of-eden.jpg', title: "East from Eden", author: "", genre: "Novel", price: "£4.99", description: "East of Eden brings to life the intricate details of two families, the Trasks and the Hamiltons, and their interwoven stories. The Hamilton family in the novel is said to be based on the real-life family of Samuel Hamilton, Steinbeck's maternal grandfather. A young John Steinbeck also appears briefly in the novel as a minor character." }]

export default function Card({ book, home }) {
    const path = book.title.replaceAll(" ", "-").toLowerCase();
    return (
        <>
            <section className={styles.card}>
                {home ?
                    <Link href={path}>
                        <Image src={`${book.src}`} width={100} height={100} />
                    </Link>
                    :
                    <Image src={`${book.src}`} width={100} height={100} />
                }
                <h2>{book.title}</h2>
                <p><span>Author:</span> {book.author}</p>
                <p><span>Genre:</span> {book.genre}</p>
                <p><span>Price:</span> {book.price}</p>
                {!home &&
                    <p>description: {book.blurb}</p>}
            </section>
        </>
    )
}
