import React from 'react'
import BlogPageLayout from './BlogPageLayout'

const Blog1 = () => {
    return (

        <BlogPageLayout
            title="Right-lo-left   behind development in mobile web design"
            image="/images/car.jpg"
            authorImage="/images/profile/4.png"
            authorName="Pavan Prajapat"
            catalog="Car"
            releaseDate="19 January 2024"
        >
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">


                            {/* description */}
                            <div className="mt-3">
                                <h5 className="font-Syne fw-bold flex justify-between mt-3">About this position</h5>



                                <p className="text-[18px] mt-4 font-Syne text-[#08080899]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt repellat quisquam tempore ea quis impedit aliquid odio corrupti, placeat inventore facilis non quos!</p>

                                <p className="text-[18px] mt-4 font-Syne text-[#08080899]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, repellendus. Sequi error minima, autem magnam quidem distinctio mollitia laborum nostrum libero. Sequi eius, praesentium, adipisci sed, porro cum at et quaerat cupiditate quia totam.</p>

                                <p className="text-[18px] mt-4 font-Syne text-[#08080899]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis esse nesciunt et exercitationem illum earum ducimus. Voluptatem excepturi rerum expedita explicabo saepe quo, quaerat aliquid adipisci? Accusamus itaque soluta facere. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias maxime deserunt quidem aut enim suscipit fuga itaque quo laborum fugiat unde commodi id, qui corporis impedit tempora tenetur velit? Labore laborum sequi atque blanditiis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, odit iure magnam voluptatibus cumque quos voluptas aut praesentium nihil, enim unde, reprehenderit reiciendis.</p>

                                <div className="row my-4">
                                    <div className="col-lg-6">
                                        <img src="images/car_with_man.jpg" alt="" />
                                    </div>
                                    <div className="col-lg-6">
                                        <img src="images/car-staring.jpg" alt="" />
                                    </div>
                                </div>

                                <h5 className="font-Syne fw-bold flex justify-between mt-3">About this position</h5>
                                <p className="text-[18px] mt-4 font-Syne text-[#08080899]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam dolor, iure ipsa velit dicta, nobis, obcaecati beatae officia at magni dolorem assumenda animi!</p>

                                <p className="text-[18px] mt-4 font-Syne text-[#08080899]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto error culpa tempore non, inventore quis sed vitae reiciendis. Debitis beatae excepturi consequatur commodi deleniti neque deserunt expedita alias omnis explicabo officia, fugit optio magni, voluptate eum mollitia consectetur voluptatum fuga totam quod. Adipisci, fugit aliquid!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </BlogPageLayout>

    );
};

export default Blog1

