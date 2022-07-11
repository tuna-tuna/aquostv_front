import React from "react";

type Props = {
    errorMessage: string;
    isError: boolean;
    setIsError: (flag: boolean) => void;
}

const ErrorModal: React.FC<Props> = props => {
    const closeModal = () => {
        props.setIsError(false);
    }
    if (props.isError === true) {
        return (
            <>
                <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
                    <div className="bg-white px-16 py-14 rounded-md">
                        <h3 className="text-left text-red-500 font-semibold">Error</h3>
                        <h4 className="text-left font-semibold">{props.errorMessage}</h4>
                        <button onClick={closeModal} className="bg-indigo-500 px-5 py-2 ml-2 rounded-md text-sm text-white font-semibold">Close</button>
                    </div>
                </div>
            </>
        );
    } else {
        return null;
    }
}

export default ErrorModal;