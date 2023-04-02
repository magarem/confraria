import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function GlobalFeature({ block, dataBinding }) {
  let content = ""
  content = (
    <>
      <div style={{width: '100%'}}>
        <div style={{width: '100%'}}>
            <img src={block.image} alt={block.image_alt} loading="lazy" style={{width: '100%'}}/>
        </div>
      </div>
    </>
  );
  return (
    <section  data-cms-bind={dataBinding}>
      <div>{content}</div>
    </section>
  );
}
