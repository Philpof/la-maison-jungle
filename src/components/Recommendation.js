function Recommendation() {
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth > 2 && currentMonth < 6

    if (isSpring) {
        return <p>On peut donc rempoter !</p>
    }
    return <p>Ce n'est pas le moment de rempoter.</p>
}

export default Recommendation