// Shared curve geometry so the journey animation (train) and the settled
// scene (destination page) draw the exact same red curve, in the exact
// same screen position, with no visual jump between the two.
// Path goes from BOTTOM-LEFT to TOP-RIGHT, starting higher for better visibility

export const DESKTOP_VIEWBOX = "0 0 1600 900";
export const DESKTOP_PATH =
  "M -120 780 C 290 650 665 520 963 420 C 1248 320 1437 280 1725 320";

export const MOBILE_VIEWBOX = "0 0 600 1000";
export const MOBILE_PATH =
  "M -70 820 C 118 680 314 540 447 420 C 565 300 618 260 704 300";
