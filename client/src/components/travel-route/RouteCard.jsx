'use client';

import {usePathname, useRouter} from "next/navigation";
import dayjs from "dayjs";

export default function RouteCard({data}) {
    let router = useRouter();
    let path = usePathname();
    return <>
        <div className="card">
            <div className="card-body">
                <h6 className="card-title">{data.fromTown.name} - {data.toTown.name}</h6>
                <ul>
                    <li className={'card-text'}>
                        Driver - {data.bus.driver.name}
                    </li>
                    <li className={'card-text'}>
                        Company - {data.bus.company.name}
                    </li>
                    <li className="card-text">
                        Bus Model - {data.bus.model}
                    </li>

                    <li className="card-text">
                        Deparature Date - {dayjs(data.scheduleDate).format("DD/MM/YYYY - HH:mm")}
                    </li>
                </ul>

            </div>
            <div className={'card-footer d-flex align-items-center justify-content-between'}>
                <button className="btn btn-primary" onClick={() => router.push(`${path}/${data._id}`)}>
                    Book
                </button>
                <h6>Available -{data.availableSeat}</h6>
            </div>
        </div>
    </>
}