export default function TabButton({ children, onSelect, isSelected }) {
    console.log('탭버튼.jsx 실행');
    return (
        <li>
        <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    );
}