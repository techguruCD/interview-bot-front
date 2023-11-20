import { ColorRing } from "react-loader-spinner";

export default function Loading() {

    return <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        <ColorRing
            visible={true}
            height="50"
            width="50"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#5346a2", "##e16dde", "##8a5bcf", "#eca6ea", "##7444d4"]}
        />

    </div>
}