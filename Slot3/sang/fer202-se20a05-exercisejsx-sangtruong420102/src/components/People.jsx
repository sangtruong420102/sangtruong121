function People() {
  const people = [
    { id: 1, name: 'Nguyễn Văn A', age: 20 },
    { id: 2, name: 'Trần Thị B', age: 22 },
    { id: 3, name: 'Lê Văn C', age: 19 },
    { id: 4, name: 'Phạm Thị D', age: 21 },
    { id: 5, name: 'Hoàng Văn E', age: 23 },
    { id: 6, name: 'Nguyễn Thị F', age: 20 },
    { id: 7, name: 'Trần Văn G', age: 22 },
    { id: 8, name: 'Lê Thị H', age: 19 },
    { id: 9, name: 'Phạm Văn I', age: 21 },
    { id: 10, name: 'Hoàng Thị J', age: 23 }


  ];

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <ol>
        {people.map((person, index) => (
          <li key={person.id}>
            {index + 1}. {person.name} - {person.age} tuổi
          </li>
        ))}
      </ol>
    </div>
  );
}

export default People;


