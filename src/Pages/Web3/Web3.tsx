
const Web3 = () => {
    return (
        <div className='min-h-screen px-4'>
            <div className="flex items-center justify-end py-3 border-b">
                <div className="flex items-center gap-2">
                    <span className="font-medium">Address:</span>
                    <span></span>
                </div>
                <button className="btn2">Connect Wallet</button>
            </div>
            <div className="pt-10 flex items-center justify-center flex-col gap-4 w-full">
                <ul>
                    <li className="flex items-center gap-2">
                        <span className="font-medium">Amount:</span>
                        <span>20</span>
                    </li>
                </ul>
                <div className="flex items-center gap-2">
                    <button className="btn1">Pay</button>
                </div>
            </div>
        </div>
    )
}

export default Web3