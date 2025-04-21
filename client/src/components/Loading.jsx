function Loading(){
    return(<>
    <div className="fixed inset-0 flex justify-center items-center bg-black/60 z-50">
        <div className="h-[60px] p-2 w-[60px] ">
            <p className=" w-full h-full text-4xl border-4 border-transparent rounded-full border-t-white border-r-white  animate-spin"></p>
        </div>
    </div>
    </>)
}

export default Loading