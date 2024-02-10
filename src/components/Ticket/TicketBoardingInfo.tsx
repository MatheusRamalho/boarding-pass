import Image from 'next/image'

import qrCode from '@/assets/svgs/qrcode.svg'

interface TicketBoardingInfoProps {
    boardingTime: string
    terminal: number
    gate: number
    boardingGroup: number
}

export const TicketBoardingInfo = ({
    boardingTime,
    terminal,
    gate,
    boardingGroup,
}: TicketBoardingInfoProps) => {
    return (
        <div className="py-8 px-4 sm:pt-8 sm:pb-10 sm:px-8 rounded-br-3xl rounded-bl-3xl">
            <div className="flex items-center justify-between mb-8">
                <div className="">
                    <div className="text-left mb-4">
                        <span> Embarque </span>
                        <p className="w-fit bg-green-300 font-bold text-white px-3 py-2 rounded-lg">
                            {boardingTime}
                        </p>
                    </div>

                    <div className="text-left mb-4">
                        <span> Terminal </span>
                        <p className="text-gray-800 font-bold"> {terminal} </p>
                    </div>

                    <div className="text-left mb-4">
                        <span> Portão </span>
                        <p className="text-gray-800 font-bold"> {gate} </p>
                    </div>
                </div>

                <div className="flex items-center justify-center flex-col">
                    <Image src={qrCode} alt="QR code" />
                    <span> Grupo de embarque: {boardingGroup} </span>
                </div>
            </div>

            <div className="flex items-center justify-center flex-col">
                <p className="text-gray-800">
                    <strong> Atenção: </strong>o portão fecha {boardingTime}
                </p>
            </div>
        </div>
    )
}
