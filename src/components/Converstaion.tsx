import Layouted from "./Layouted.tsx";
import PromptTextarea from "./PromptTextarea.tsx";

type ConversationFlowProps = {
  conversation: object[];
};

export default function ConversationFlow(props: ConversationFlowProps) {
  //   console.log("conversation", props.conversation);

  return (
    <main className="relative flex h-full w-full flex-col">
      <div className="relative flex-1 overflow-auto">
        <Layouted>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
          aspernatur aperiam natus quo vitae fugiat eveniet quos commodi
          obcaecati hic tempora, ut animi, aliquam enim dicta ad totam iusto
          quasi. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Maiores aspernatur aperiam natus quo vitae fugiat eveniet quos commodi
          obcaecati hic tempora, ut animi, aliquam enim dicta ad totam iusto
          quasi. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Maiores aspernatur aperiam natus quo vitae fugiat eveniet quos commodi
          obcaecati hic tempora, ut animi, aliquam enim dicta ad totam iusto
          quasi.
        </Layouted>
        <Layouted>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
          aspernatur aperiam natus quo vitae fugiat eveniet quos commodi
          obcaecati hic tempora, ut animi, aliquam enim dicta ad totam iusto
          quasi. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Maiores aspernatur aperiam natus quo vitae fugiat eveniet quos commodi
          obcaecati hic tempora, ut animi, aliquam enim dicta ad totam iusto
          quasi. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Maiores aspernatur aperiam natus quo vitae fugiat eveniet quos commodi
          obcaecati hic tempora, ut animi, aliquam enim dicta ad totam iusto
          quasi.
        </Layouted>
        <Layouted>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
          aspernatur aperiam natus quo vitae fugiat eveniet quos commodi
          obcaecati hic tempora, ut animi, aliquam enim dicta ad totam iusto
          quasi. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Maiores aspernatur aperiam natus quo vitae fugiat eveniet quos commodi
          obcaecati hic tempora, ut animi, aliquam enim dicta ad totam iusto
          quasi. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Maiores aspernatur aperiam natus quo vitae fugiat eveniet quos commodi
          obcaecati hic tempora, ut animi, aliquam enim dicta ad totam iusto
          quasi.
        </Layouted>
        <Layouted>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
          aspernatur aperiam natus quo vitae fugiat eveniet quos commodi
          obcaecati hic tempora, ut animi, aliquam enim dicta ad totam iusto
          quasi. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Maiores aspernatur aperiam natus quo vitae fugiat eveniet quos commodi
          obcaecati hic tempora, ut animi, aliquam enim dicta ad totam iusto
          quasi. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Maiores aspernatur aperiam natus quo vitae fugiat eveniet quos commodi
          obcaecati hic tempora, ut animi, aliquam enim dicta ad totam iusto
          quasi.
        </Layouted>
      </div>

      <PromptTextarea></PromptTextarea>
    </main>
  );
}
