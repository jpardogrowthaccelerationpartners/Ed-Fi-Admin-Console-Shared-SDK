interface GetDaysDifferenceParams {
    start: Date 
    end: Date
}

const getDaysDifference = ({ start, end }: GetDaysDifferenceParams): number => {
    var timeDifference = end.getTime() - start.getTime()  
    var daysDifference = timeDifference / (1000 * 3600 * 24)

    return daysDifference
}

export default getDaysDifference