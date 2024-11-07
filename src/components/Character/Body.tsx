import { useContext } from "react"
import { SVGContext } from "./SVGContext"
import { getShadowOpacity } from "./getShadowOpacity"

export default function Body() {
    const { 
        primaryColor: skinColor, 
        strokeWidth 
    } = useContext(SVGContext)

    return (
        <>
            <g // body parts
                fill={skinColor}
                stroke="#000000"
                strokeWidth={strokeWidth}
            >
                <path d="m 122.6097,674.14832 c 4.96318,13.69715 24.15334,7.5509 24.15334,7.5509 17.51982,-3.2198 24.1365,-3.79483 28.70289,-8.50792 l 77.70024,-167.49105 c 5.21595,-11.24353 0.82447,-25.68856 -9.80115,-32.2368 l -3.83664,-2.36441 c -10.62561,-6.54825 -23.48732,-2.73584 -28.70327,8.50769 l -59.34049,163.90074 c -5.21595,11.24353 -33.81886,16.99912 -28.87492,30.64085 z" />
                <path d="m 498.34939,674.14832 c -4.96318,13.69715 -24.15334,7.5509 -24.15334,7.5509 -17.51983,-3.2198 -24.1365,-3.79483 -28.7029,-8.50792 L 367.79292,505.70025 c -5.21595,-11.24353 -0.82447,-25.68856 9.80115,-32.2368 l 3.83664,-2.36441 c 10.62561,-6.54825 23.48732,-2.73584 28.70327,8.50769 l 59.34049,163.90074 c 5.21595,11.24353 33.81885,16.99912 28.87492,30.64085 z" />
                <path d="m 206.24254,665.07255 c 27.61901,0.837 83.34401,0.391 130.13601,0 41.073,-0.344 75.264,-0.645 77.523,0 0.411,5.318 0.543,13.299 0.509,14.252 -0.534,14.895 -1.074,21.253 -6.413,50.063 -6.205,33.484 -16.12,76.009 -26.281,114.224 -8.456,31.806 -17.084,60.626 -23.885,78.763 0,0 7.823,20.297 0.044,26.199 -12.461,9.453 -32.969,1.569 -40.703,-8.94 -2.741,-3.724 -6.255,-9.947 -7.085,-17.827 -0.076,-0.028 -0.009,0.05 -0.001,0.007 -0.831,7.877 -5.122,14.097 -7.862,17.82 -7.734,10.509 -28.241,18.393 -40.702,8.94 -3.424,-2.597 -4.216,-7.824 -3.858,-12.933 0.455,-6.5 3.902,-13.266 3.902,-13.266 -5.829,-15.545 -12.887,-38.936 -20.003,-65.329 -11.164,-41.402 -22.474,-90.19 -29.41801,-127.658 -5.339,-28.81 -5.879,-35.168 -6.412,-50.063 -0.034,-0.953 0.098,-8.934 0.509,-14.252 z" />
                <path d="m 207.19201,504.82455 c 1.96568,42.437 15.60599,73.765 14.91986,89.369 -1.69333,38.515 -16.81387,49.682 -16.6323,79.143 0.16627,27.088 34.94456,62.665 77.98692,62.665 h 50.53335 c 43.04236,0 79.68026,-33.77 79.73377,-61.665 0.0545,-28.516 -16.92281,-53.97 -16.68582,-78.071 0.23604,-23.903 13.36318,-45.612 14.93993,-90.25 1.57579,-44.638 -34.94552,-77.987 -77.98788,-77.987 h -50.53335 c -43.04236,0 -78.12166,36.911 -76.27448,76.796 z" />
                <path d="m 453.82705,282.83718 v 19.16493 c 0,69.70883 -56.595,126.30406 -126.305,126.30406 h -34.086 c -69.709,0 -126.304,-56.59523 -126.304,-126.30406 v -19.16493 c 0,-69.70974 56.595,-126.30496 126.304,-126.30496 h 34.086 c 69.71,0 126.305,56.59522 126.305,126.30496 z" />
            </g>
            <path // line between legs
                d="m 308.99855,737.66648 1.088,184.14707"
                strokeWidth={strokeWidth}
                stroke="#000000" />
            <g // shadows
                fill="#572e3e"
                fillOpacity={getShadowOpacity(skinColor)}
            >
                <path d="m 291.27155,737.03908 c -0.585,7.0063 7.861,140.06834 7.931,181.70261 0.008,4.79224 -0.503,10.73135 -2.142,13.69485 -1.761,3.18642 -5.571,8.03514 -9.195,10.54171 -4.391,3.03613 -8.564,5.44385 -11.407,6.83885 -5.536,2.7184 31.024,-5.1715 31.29,-19.54721 0.872,-47.25665 1.822,-179.33523 1.25,-192.60341 -5.879,0.33287 -11.652,-1.18419 -17.727,-0.6274 z" />
                <path d="m 357.83155,922.37455 c -0.064,-0.11 4.931,17.552 2.521,22.525 -0.509,1.05 -5.134,6.129 -4.743,3.747 1.614,-9.842 -3.193,-19.265 -4.85,-24.696 -1.617,-5.3 -3.323,-7.729 1.795,-24.154 5.579,-17.903 25.945,-123.713 32.155,-171.843 1.71,-13.249 14.059,-19.255 24.847,-28.845 4.876,-4.334 5.927,4.947 -8.767,70.505 -8.175,36.471 -14.766,60.323 -22.394,86.444 -4.88,16.714 -18.621,60.157 -20.564,66.317 z" />
                <path d="m 139.88055,680.51555 c 11.263,-5.92 19.689,-8.651 23.978,-11.253 1.8,-1.091 2.099,-2.346 5.175,-8.406 12.814,-25.245 40.302,-92.487 47.213,-98.769 6.299,26.729 -11.476,32.402 -27.546,80.611 -11.527,34.583 -17.844,36.24 -48.82,37.817 z" />
                <path d="m 481.63855,680.51555 c -11.263,-5.92 -19.689,-8.651 -23.978,-11.253 -1.8,-1.091 -2.099,-2.346 -5.175,-8.406 -12.814,-25.245 -40.302,-92.487 -47.213,-98.769 -1.28105,5.43596 -3.49048,10.24155 -2.99694,14.47064 1.93324,16.56566 17.74115,27.73578 30.54294,66.14036 11.527,34.583 17.844,36.24 48.82,37.817 z" />
                <path d="m 384.14555,716.82855 c -0.074,-0.239 15.747,-30.229 9.966,-66.84 -5.188,-32.859 -18.128,-48.596 -4.895,-75.062 11.735,-23.47 17.004,-23.012 21.621,-46.098 -21.257,61.644 -20.102,63.905 0,122.384 7.87,22.895 -4.126,51.187 -13.87,57.521 -1.2,0.78 -12.822,8.334 -14.686,10.199" />
                <path d="m 248.74355,436.50855 c 14.513,5.64 26.167,9.852 66.134,9.556 31.971,-0.236 44.539,-6.094 55.392,-9.556 -5.452,-3.935 -13.559,-9.654 -48.104,-8.152 -59.422,2.584 -54.847,-1.136 -73.422,8.152 z" />
                <path d="m 310.47955,428.11155 c -8.276,-0.542 -20.222,-0.553 -26.968,-4.265 41.768,0.114 63.102,-11.989 83.307,-21.613 23.946,-11.405 49.951,-41.243 60.019,-61.786 7.401,-15.104 20.197,-50.612 25.547,-83.9 1.349,51.265 1.137,100.015 -44.495,143.568 -18.495,17.652 -59.93,30.451 -97.41,27.996 z" />
            </g>
        </>
    )
}