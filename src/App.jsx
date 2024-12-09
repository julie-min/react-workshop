import { useState } from 'react';

import { CORE_CONCEPTS } from "./data.js";
import Header from './components/Header/Header.jsx';
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data-with-examples";

function App() {
    const [ originalButton, changeButton ] = useState();

    function handleSelect(button) {
        // selectedButton => 'components', 'jsx', 'props', 'state'

        changeButton(button);
        console.log('changeButton',changeButton);

        // tabContent = selectedButton;
        // console.log('탭 콘텐츠 클릭함',tabContent);
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
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem}/>))}
                    </ul>
                </section>
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
            </main>
        </div>
    );
}

export default App;