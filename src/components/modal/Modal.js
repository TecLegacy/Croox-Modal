import style from './modal.module.css';
import ReactDOM from 'react-dom';
import React from 'react';

const BackDrop = props => {
  return <div className={style.backdrop} onClick={props.onConfirm}></div>;
};
const ModalE = props => {
  return (
    <>
      <div className={style.modal}>
        <div>
          <h1>TOP</h1>
        </div>
        <div className={style.scroll}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
          aperiam iusto, blanditiis optio, voluptates eos numquam voluptas atque
          soluta quam modi accusantium. Sapiente delectus itaque, dolorum
          maiores repellat et ratione? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dignissimos unde consequuntur magni, sint porro ut
          amet! Molestiae quisquam dolorum, officia in soluta consectetur harum
          nesciunt maxime pariatur quas explicabo similique ex modi autem
          consequatur cupiditate odit quibusdam reiciendis, omnis ad. Voluptas
          sunt, animi, nemo eum possimus sequi vitae quod est quia illum veniam
          laboriosam, rerum cum officiis dolor consequuntur dolore enim
          laudantium. Eius doloremque pariatur facere itaque. Magnam asperiores
          exercitationem similique corporis fugit consequatur fugiat inventore
          sint. Earum cupiditate dolorum magnam, error esse tempore iure ea
          voluptatibus eaque deleniti consectetur consequatur debitis minus est
          necessitatibus blanditiis quia reprehenderit animi, doloremque quos
          sed a maiores! Delectus, repellendus veniam. At ut incidunt dicta nam
          minima aliquid nihil ea dolores, ipsum praesentium fugiat! Ullam
          commodi inventore nam placeat ipsam quae quo tenetur corrupti culpa
          laboriosam dolores veniam, illum illo ratione incidunt mollitia, nemo
          optio labore perferendis laborum adipisci quod. Velit error molestias
          doloribus, earum nesciunt necessitatibus nihil neque quidem.
          Asperiores ratione optio molestiae debitis aspernatur fuga ipsum
          ducimus nemo mollitia incidunt officiis, quia animi fugiat fugit,
          maiores a beatae sed quis vero, laborum delectus sequi dolores dolore
          perferendis. Aliquid distinctio doloribus iure sapiente sequi
          aspernatur cupiditate magni voluptates odit officiis quibusdam,
          quaerat corrupti odio laborum fugiat perferendis corporis dolor ipsa
          ratione minima? Modi inventore sapiente, ipsa voluptatibus nesciunt
          officia, et dolores fugit est ut quas aliquid cupiditate voluptatem
          quisquam reiciendis iure! Reiciendis, neque repudiandae. Dolores
          incidunt modi officiis reprehenderit quis possimus quisquam laudantium
          magni impedit perferendis numquam, dolor laborum odit vitae ipsam,
          voluptates cumque ratione, temporibus accusantium iste perspiciatis!
          Necessitatibus, vero tempora corrupti porro aperiam similique unde
          quidem fuga repellendus sit quas fugit voluptatem iste eaque atque
          voluptas beatae dignissimos quia! Cupiditate sunt voluptates
          voluptatem iusto ut corrupti in non nihil facilis mollitia! Earum
          excepturi nam quae fugiat saepe officiis iure dignissimos cupiditate
          facere architecto deleniti rerum quibusdam, hic neque nesciunt
          voluptates dolores quod laborum, voluptatibus consequuntur impedit,
          rem ea? Eligendi, expedita. Porro amet illum, non, odio accusantium
          consequuntur harum deleniti error mollitia delectus veritatis
          consequatur eaque aut quidem omnis voluptatem. Qui recusandae
          repudiandae reiciendis excepturi, quaerat nulla corrupti ut itaque
          quisquam? Et suscipit fuga sunt non distinctio incidunt unde veritatis
          vero illo eum autem delectus tenetur facilis, cumque labore totam.
          Repellat assumenda minima illum consectetur aliquam eos, fugit
          possimus doloribus est libero necessitatibus, eius iusto? Modi
          corporis necessitatibus, veniam rem, hic eius et deserunt incidunt,
          magnam libero ipsa. Expedita ipsam ipsum, adipisci accusamus eos
          blanditiis harum dolor nam neque culpa! Aspernatur beatae corporis
          sint. Voluptatibus nulla veniam inventore a, eaque officiis.
          Temporibus quidem praesentium possimus expedita blanditiis provident
          qui molestiae repudiandae tenetur nostrum. Rerum dolorum sunt
          temporibus delectus, quasi aut assumenda ad impedit harum sit nobis
          nihil ipsum veniam cum maxime unde quas corrupti atque reprehenderit.
          Autem tempora aut aperiam eveniet deserunt dolore vero consequatur a
          voluptatum, suscipit, in eum illo temporibus necessitatibus culpa
          dignissimos aspernatur officia quo sit quos? Rerum debitis similique
          assumenda placeat exercitationem est consequuntur quia enim ipsa!
          Iusto harum hic deserunt accusamus dignissimos consequatur nisi dolore
          aliquid eos.
        </div>
        <div>
          <h1>
            <button onClick={props.onConfirm}>Ok</button>
          </h1>
        </div>
      </div>
      )
    </>
  );
};

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalE onConfirm={props.onConfirm} />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};
export default Modal;
