const CartProduct = ({ item }) => {
  const { title, img, count, total } = item;
  console.log(item)

  return (
    <section>
      <h2>{ title }</h2>
      <div>
        <img src={img} alt=""/>
      </div>
      <div>
        <span>{ count }</span>
        <span>{ total }</span>
      </div>
    </section>
  )
}

export default CartProduct;