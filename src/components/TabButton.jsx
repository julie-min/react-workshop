export default function TabButton({ children, onSelect }) {
    console.log('탭버튼 함수 실행');
    return (
        <li>
        <button onClick={onSelect}>{children}</button>
        </li>
    );
}