

export default function Range(props) {


    const handleChange = (e) => {
        props.setGradientCount(e.target.value);
    };

    return (
        <div className="absolute rotate-90 top-1/2 right-5">
            <input
                type="range"
                min="4"
                max="96"
                value={props.gradientCount}
                onChange={handleChange}
                className="cursor-pointer"
            />
        </div>
    );
}
