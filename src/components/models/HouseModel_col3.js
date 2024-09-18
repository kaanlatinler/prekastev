import Link from "next/link"

const HouseModel_col2 = ({model}) => {
    const title1 = model.title.split(" ")[0];
    const title2 = model.title.split(" ")[1];
  return (
    <div className="col-md-4">
        <h3><span className="id-color">{title1}</span> {title2}</h3>
        <div className="spacer-single"></div>
        <img src={model.mainPicture} className="img-responsive" alt="" />
        <div className="spacer-single"></div>
        <Link href={`/models/${model._id}`} className="btn-line btn-fullwidth">DAHA FAZLA</Link>
    </div>
  )
}

export default HouseModel_col2