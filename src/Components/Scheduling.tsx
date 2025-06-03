import { ScheduleForm } from "./Schedule";

export default function Scheduling() {
    return (
        <div className="flex w-full flex-col h-screen sm:mt-12 md:mt-12 items-end sm:items-center sm:justify-center  text-white justify-end text-center">
            <div className="flex w-full flex-row items-center justify-center  px-8 text-white mt-4 gap-2">

                <ScheduleForm/>
            </div>
        </div>
    )
}