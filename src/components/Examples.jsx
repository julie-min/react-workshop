import TabButton from "./TabButton";
import {useState} from "react";
import {EXAMPLES} from "../data-with-examples";

export default function Examples() {
    const [ originalButton, changeButton ] = useState();

    function handleSelect(button) {
        // selectedButton => 'components', 'jsx', 'props', 'state'

        changeButton(button);
    }

    let tabContent = <p> 선택한 버튼이 없는 초기 상태 </p>;
    if (originalButton) {
        tabContent = (
            <div id="tab-content">
                <h3> {EXAMPLES[originalButton].title} </h3>
                <p> {EXAMPLES[originalButton].description} </p>
                <pre>
                            <code>
                            {EXAMPLES[originalButton].code}
                            </code>
                        </pre>
            </div>
        );
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton isSelected={originalButton == 'components'} onSelect={() => handleSelect('components')}>
                    Components</TabButton>
                <TabButton isSelected={originalButton == 'jsx'} onSelect={() => handleSelect('jsx')}>
                    JSX</TabButton>
                <TabButton isSelected={originalButton == 'props'} onSelect={() => handleSelect('props')}>
                    Props</TabButton>
                <TabButton isSelected={originalButton == 'state'} onSelect={() => handleSelect('state')}>
                    State</TabButton>
            </menu>
            {tabContent}
        </section>
    );
}