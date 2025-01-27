import stays from "../../stays.json";
import Card from "./Card"

export default function CardGrid() {

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 " >
                {
                    stays.map(({ title, superHost, rating, type, beds, photo, }) => (

                        <Card
                            key={title}
                            title={title}
                            superHost={superHost}
                            rating={rating}
                            type={type}
                            beds={beds}
                            photo={photo}

                        />
                    ))
                }


            </div>
        </>
    )
}
