
const QuestionRow_black = ({faqs}) => {
  return (
    <section id="section-faq">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <h3 class="s2"><span class="id-color">PrtekastEv</span> SORULAR</h3>
                </div>

                <div class="col-md-9">

                    <div class="expand-group">
                        {faqs.map((faq, index) => (
                            index < 5 ?
                            <div key={index} class="expand">
                                <h4>{faq.question}</h4>
                                <div class="hidden-content">
                                    {faq.answer}
                                </div>
                            </div>
                            : null
                        ))}
                    </div>


                </div>


            </div>
        </div>
    </section>
  )
}

export default QuestionRow_black