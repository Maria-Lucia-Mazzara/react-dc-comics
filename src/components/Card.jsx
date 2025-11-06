

function Card(props) {

    return (
        <section className="d-flex flex-wrap gap-4 justify-content-center">

            <div key={props.id} className="card col-2">
                <div className="card_img h-100">
                    <img src={props.thumb} className="card-img-top" />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-light">{props.series}</h5>
                </div>
            </div>



        </section>
    );
}

export default Card