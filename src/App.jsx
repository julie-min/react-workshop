import { useState } from 'react';

import { CORE_CONCEPTS } from "./data.js";
import Header from './components/Header/Header.jsx';
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton";

function App() {
    const [ originalButton, changeButton ] = useState('Please click a button!');

    // let tabContent = 'Please click a button';

    function handleSelect(button) {
        // selectedButton => 'components', 'jsx', 'props', 'state'

        changeButton(button);
        console.log('changeButton',changeButton);

        // tabContent = selectedButton;
        // console.log('탭 콘텐츠 클릭함',tabContent);
    }
    // console.log('앱 함수 실행');

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept
                        title={CORE_CONCEPTS[0].title}
                        description={CORE_CONCEPTS[0].description}
                        image={CORE_CONCEPTS[0].image}
                        />
                        <CoreConcept {...CORE_CONCEPTS[1]}/>
                        <CoreConcept
                            title={CORE_CONCEPTS[2].title}
                            description={CORE_CONCEPTS[2].description}
                            image={CORE_CONCEPTS[2].image}
                        />
                        <CoreConcept
                            title={CORE_CONCEPTS[3].title}
                            description={CORE_CONCEPTS[3].description}
                            image={CORE_CONCEPTS[3].image}
                        />
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => handleSelect('components')}>
                            Components</TabButton>
                        <TabButton onSelect={() => handleSelect('jsx')}>
                            JSX</TabButton>
                        <TabButton onSelect={() => handleSelect('props')}>
                            Props</TabButton>
                        <TabButton onSelect={() => handleSelect('state')}>
                            State</TabButton>
                    </menu>
                    {originalButton}
                </section>
            </main>
        </div>
    );
}

export default App;