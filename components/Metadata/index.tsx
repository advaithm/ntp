import { MetadataContainer, MetadataContent, AttributionText, Geolocation } from "../styles"

import { Attribution } from "../types"

export const Metadata = ({ attribution }: { attribution: Attribution }) => {
  const copyCoords = (location: Attribution) => {
		if(typeof(navigator) == "undefined") return;

		let data = "";

		if(location.lp) data = `${location.lp[0]}, ${location.lp[1]}`;
		else data = location.l;

		navigator.clipboard.writeText(data);
    console.log(location)
		alert(`Copied "${data}" to clipboard.`)
  }
  
  return (
    <>
      <AttributionText>
			  <a target={"__blank"} href={attribution.p}>Photo</a> by <a target={"__blank"} href={`https://unsplash.com/@${attribution.usn}`}>{attribution.n}</a> on <a target={"__blank"} href={`https://unsplash.com`}>Unsplash</a>
			</AttributionText>

	    {attribution.l && <Geolocation>
			  <a style={{ cursor: "pointer" }} onClick={() => copyCoords(attribution)}>{attribution.l}</a>
      </Geolocation>}
    </>
  )
}