import { useState } from "react";
import { Rd1L, Rd1R, Rd2L, Rd2R, Rd3L, Rd3R, champ } from "./dataBracket.js";
import wwelogo from "./art/wwelogo.png";
import "./BracketModular.css";

export function BracketModular() {
    const [now, setNow] = useState("WWE logo");
    const [photo, setPhoto] = useState(wwelogo);
    const [prevClick, setPrevClick] = useState("None yet");

    const clearFeaturedWrestler = () => {
        setPhoto(wwelogo); setNow("WWE logo");
    };

    const newFeaturedWrestler = (photo, name) => {
        setPhoto(photo); setNow(name);
    };

    function BracketCol(arr, L_R, round) {
        return (
            <div className={"single-col"}>
                <div
                    className={"col-name " + L_R+round}
                    id={
                        (prevClick.slice(0, 4) == round.slice(0, 4))
                        ? ""
                        : "no-show"
                    }
                >
                    {round}
                </div>
                {
                    arr.map(item => {
                        const i = item.name[0];
                        return (
                            <button
                                key={round + i} 
                                className={"col-item " + L_R + " " + item.see + " " + round+i}
                                onClick={() => {
                                    if (item.see == "hide") {
                                        item.see = "unhide";
                                        if (photo != item.ph) { newFeaturedWrestler(item.ph, item.name) }
                                    } else {
                                        item.see = "hide";
                                        if (photo == item.ph) { clearFeaturedWrestler() }
                                    }
                                    setPrevClick(round + i + "_" + item.see);
                                }}
                                id={
                                    (String(now).valueOf() == String(item.name).valueOf())
                                    && (item.see == "unhide")
                                    ? ((L_R == "L") ? "now-L" : "now-R")
                                    : ""
                                }
                            >
                                {item.name}
                            </button>
                        )
                    })
                }
            </div>
        )
    }

    function FeaturedWrestler() {
        return (
            <div className={"featured-wrestler"}>
                <img
                    className={"featured-image " + prevClick} 
                    id={
                        (photo == wwelogo) ? "wwelogo" : "wrestler"
                    }
                    src={photo} 
                    alt={now} 
                    onClick={() => {
                        clearFeaturedWrestler();
                        setPrevClick("photo reset")
                    }}
                />
                <button
                    className={"champ-item C " + champ.see + " C1"}
                    onClick={() => {
                        if (champ.see == "hide") {
                            champ.see = "unhide";
                            if (photo != champ.ph) { newFeaturedWrestler(champ.ph, champ.name) }
                        } else {
                            champ.see = "hide";
                            if (photo == champ.ph) { clearFeaturedWrestler() }
                        }
                        setPrevClick("C1_" + champ.see);
                    }}
                    id={
                        (String(now).valueOf() == String(champ.name).valueOf())
                        && (champ.see == "unhide")
                        ? "now-C" : ""
                    }
                >
                    {champ.name}
                </button>
            </div>
        )
    }

    return (
        <div className={"bracket-modular"}>
            <div id={"top-brackets"} style={{ zIndex: "1"}} />
            <div id={"bottom-brackets"} style={{ zIndex: "1"}} />
            <div id={"mid-brackets"} style={{ zIndex: "1"}} />
            <div id={"final-brackets"} style={{ zIndex: "1"}} />

            <div style={{ marginLeft: "1.5vw", zIndex: "6" }}>
                {BracketCol(Rd1L, "L", "Openers")}
            </div>
            <div style={{ zIndex: "5" }}>
                {BracketCol(Rd2L, "L", "Semifinals")}
            </div>
            <div style={{ zIndex: "4" }}>
                {BracketCol(Rd3L, "L", "Finals")}
            </div>
            <div style={{ zIndex: "2" }}>
                {FeaturedWrestler()}
            </div>
            <div style={{ zIndex: "4" }}>
                {BracketCol(Rd3R, "R", "Finals")}
            </div>
            <div style={{ zIndex: "5" }}>
                {BracketCol(Rd2R, "R", "Semifinals")}
            </div>
            <div style={{ marginRight: "1.5vw", zIndex: "6" }}>
                {BracketCol(Rd1R, "R", "Openers")}
            </div>
        </div>
    )
}
