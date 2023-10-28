const addPostButton = document.getElementById('add-post');
        const postContainer = document.getElementById('post-container');
        let postCounter = 1;

        // 글 추가 버튼 클릭 시 새로운 글쓰기 창을 동적으로 생성
        addPostButton.addEventListener('click', () => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            postDiv.innerHTML = `
                <h2>글쓰기 창</h2>
                <button class="delete-post">삭제</button>
                <form class="write-form">
                    <div class="post-number-container">
                        <label for="post-number1">글 번호 (1부분):</label>
                        <input type="text" name="post-number1" required>
                    </div>
                    <div class="post-number-container">
                        <label for="post-number2">글 번호 (2부분):</label>
                        <input type="text" name="post-number2" required>
                    </div>
                    <label for="title">제목:</label>
                    <input type="text" name="title" required>
                    <br>
                    <label for="content">내용:</label>
                    <textarea name="content" rows="4" required></textarea>
                    <br>
                    <label for="image">이미지 업로드:</label>
                    <input type="file" name="image">
                    <br>
                    <button type="submit">확인</button>
                </form>
            `;

            postContainer.appendChild(postDiv);

            // 삭제 버튼 클릭 시 해당 포스트 삭제
            const deleteButton = postDiv.querySelector('.delete-post');
            deleteButton.addEventListener('click', () => {
                postContainer.removeChild(postDiv);
            });
        });

        // 각 글 포스트의 번호를 사용자가 입력한 값으로 설정
        postContainer.addEventListener('submit', (e) => {
            e.preventDefault();
            const form = e.target;
            const postNumberInput1 = form.querySelector('[name="post-number1"]');
            const postNumberInput2 = form.querySelector('[name="post-number2"]');
            const postNumber = `${postNumberInput1.value}-${postNumberInput2.value}`;

            // 입력 필드를 수정 가능하게 함
            postNumberInput1.removeAttribute('readonly');
            postNumberInput2.removeAttribute('readonly');

            // 사용자가 입력한 번호를 설정하고, 포스트 번호를 증가시킴
            postNumberInput1.value = postNumberInput1.value;
            postNumberInput2.value = postNumberInput2.value;
            postCounter++;
        });