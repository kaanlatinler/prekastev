const QuestionRow_gray = ({faqs}) => {
  return (
    <section id="section-faq-2" data-bgcolor="#1c1e20">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <h3 class="s2"><span class="id-color">PreakastEv</span> SORULAR</h3>
                </div>

                <div class="col-md-9">

                    <div class="expand-group">
                        {faqs.map((faq, index) => (
                            index >= 5 && index < 10 ?
                            <div class="expand">
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

export default QuestionRow_gray