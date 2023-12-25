import {FaCheckCircle} from "react-icons/fa";

export default function SeatCard({data, selectSeatHandler, seatList}) {
    return <>
        <div className="card">
            <div className="card-body">
                <h6 className="card-title">{data.seatID}</h6>
            </div>

            <div className={'card-footer'}>
                <button className={`btn ${data.available ? "btn-primary" : "btn-dark"}`}
                        onClick={() => {
                            selectSeatHandler(data._id);
                        }}
                        disabled={!data.available}>
                    {data.available ? !seatList.includes(data._id) ? <>Check</> : <> Selected <FaCheckCircle/></> : 'Occupied'}

                </button>
            </div>

        </div>
    </>
}