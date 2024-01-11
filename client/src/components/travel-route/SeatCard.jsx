import {FaCheckCircle} from "react-icons/fa";
import {MdOutlineAirlineSeatReclineNormal} from "react-icons/md";

export default function SeatCard({display, data, selectSeatHandler, seatList}) {
    return <>
        <div className="card">
            <div className="card-body d-flex justify-content-between">
                <MdOutlineAirlineSeatReclineNormal />

                <h6 className="card-title">{data.seatID}</h6>
            </div>

            <div className={'card-footer'}>
                {display === false ? <button className={`btn ${data.available ? "btn-primary" : "btn-dark"}`}
                                             onClick={() => {
                                                 selectSeatHandler(data._id);
                                             }}
                                             disabled={!data.available}>
                    {data.available ? !seatList.includes(data._id) ? <>Check</> : <> Selected <FaCheckCircle/></> : 'Occupied'}

                </button> : ""}
                {
                    display === true ? data.available ? <h5 className={'text-success'}>Available</h5> : <h5 className={'text-danger'}>Occupied</h5> : ""
                }

            </div>

        </div>
    </>
}