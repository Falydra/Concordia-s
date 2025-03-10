

export default function Reports() {
    return (
        <>
              <h1 className="text-xl font-semibold">Further Reports</h1>
                <a href="/terms-service" className="cursor-pointer hover:text-blue-300">
                    <h1>
                        Terms of Service
                    </h1>
                </a>
                <a href="/privacy-policy" className="cursor-pointer hover:text-blue-300">
                    <h1>
                        Privacy Policy
                    </h1>
                </a>
                <a href="/help" className="cursor-pointer hover:text-blue-300">
                    <h1>
                        Help
                    </h1>
                </a>
        </>
    )
}