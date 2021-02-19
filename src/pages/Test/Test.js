import {
    Box,
    Heading,
    Button,
    ButtonGroup,
} from "@chakra-ui/react"

import {
    FcCheckmark
} from "react-icons/fc"

import {
    useState,
    useEffect,
} from "react"

function Test() {

    const [index, setIndex] = useState(Math.floor(Math.random() * 39))
    const [input, setInput] = useState("")
    const [isCorrect, setAnswerStatus] = useState(false)

    const symbol1 = [
        { morse: "• –", symbol: "A" },
        { morse: "– • • •", symbol: "B" },
        { morse: "– • – •", symbol: "C" },
        { morse: "– • •", symbol: "D" },
        { morse: "•", symbol: "E" },
        { morse: "• • – •", symbol: "F" },
        { morse: "– – •", symbol: "G" },
        { morse: "• • • •", symbol: "H" },
        { morse: "• •", symbol: "I" },
        { morse: "• – – –", symbol: "J" },
        { morse: "– • –", symbol: "K" },
        { morse: "• – • •", symbol: "L" },
        { morse: "– –", symbol: "M" },
        { morse: "– •", symbol: "N" },
        { morse: "– – –", symbol: "O" },
        { morse: "• – – •", symbol: "P" },
        { morse: "– – • –", symbol: "Q" },
        { morse: "• – •", symbol: "R" },
        { morse: "• • •", symbol: "S" },
        { morse: "–", symbol: "T" },
        { morse: "• • –", symbol: "U" },
        { morse: "• • • –", symbol: "V" },
        { morse: "• – –", symbol: "W" },
        { morse: "– • • –", symbol: "X" },
        { morse: "– • – –", symbol: "Y" },
        { morse: "– – • •", symbol: "Z" },
        { morse: "• – – – –", symbol: "1" },
        { morse: "• • – – –", symbol: "2" },
        { morse: "• • • – –", symbol: "3" },
        { morse: "• • • • –", symbol: "4" },
        { morse: "• • • • •", symbol: "5" },
        { morse: "– • • • •", symbol: "6" },
        { morse: "– – • • •", symbol: "7" },
        { morse: "– – – • •", symbol: "8" },
        { morse: "– – – – •", symbol: "9" },
        { morse: "– – – – –", symbol: "0" },
        { morse: "• – • – • –", symbol: "." },
        { morse: "– – • • – –", symbol: "," },
        { morse: "• • – – • •", symbol: "?" },

    ]

    const onSkip = () => {
        setIndex(Math.floor(Math.random() * 39))
        setInput("")
    }

    const onDot = () => {
        setInput(input.concat("• "))
    }

    const onDash = () => {
        setInput(input.concat("– "))
    }

    const onClear = () => {
        setInput("")
    }

    useEffect(() => {
        // console.log(symbol1[index].morse)
        if (input === symbol1[index].morse) {
            setAnswerStatus(true)
        } else {
            console.log(symbol1[index].morse)
        }

        if (isCorrect === true) {
            setIndex(Math.floor(Math.random() * 39))
            setInput("")
            setTimeout(function () { setAnswerStatus(false) }, 1000)
            // setAnswerStatus(false)
        }
        //eslint-disable-next-line
    }, [input, index, isCorrect])

    return (
        <Box d="flex" w="100%" flexDir="column" alignItems="center" justifyContent="space-evenly" h="40vh">
            <Heading size="4xl">{isCorrect ? <FcCheckmark /> : symbol1[index].symbol}</Heading>
            <Heading size="4x1">{input}</Heading>
            <Box d="flex" flexDir="column">
                <ButtonGroup margin="10px">
                    <Button onClick={onClear}>Clear</Button>
                    <Button onClick={onDot}>•</Button>
                    <Button onClick={onDash}>–</Button>
                    <Button w="10%" onClick={onSkip}>Skip</Button>
                </ButtonGroup>
            </Box>
        </Box>
    );

}

export default Test