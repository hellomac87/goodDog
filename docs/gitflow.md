# git-flow

- git-flow를 적용한 레포를 포크를 뜨면
    - git-flow적용 안된상태로 포크가 됩니다
    - git init (.git있는지확인하는것) 안되있으면 한번 (연결하고)
    - **그래서 다시 git flow init을 해줘야합니다 (포크 뜬 모든 팀원들이)**
    - git flow init은 한번만 하면됩니다 !



### git flow 명령어

**master브랜치는 그냥 건들여서는 안된다 생각하면 됩니다!
우리는 develop위에서 모든 작업을 하게됩니다**

> 주의 ! push할때 브랜치이름만 뜨는게 아니고,
앞에 `feature/내가작성한브랜치이름` 으로 feature가 앞에 붙어서 뜨니까 주의하십시오


- git flow feature start addcontents(기능에대한브랜치이름) = 디벨롭에서 피쳐브랜치를 따서 작업을 할 수 있음
- git branch = 피쳐브랜치가 생성되었는지 확인
- 어느 위에 있는지 확인 후 > 일을 진행 !
- 일을 완료 후 > git status > add / commit / push origin 브랜치(내가현재있는브랜치)
- git flow feature finish addcontents
    - git flow feature(뭘 완료할지 우리는 피쳐를 완료할 거니까 피쳐브랜치를 써주고) finish addcontents(완료할 브랜치 이름만 기재)
- finish를 하고나서 git branch 해보면 !
    - develop이랑 master만 남아있는 것을 확인하게됩니다
- finish 후에 push를 해주는게 좋습니다 **기록을 위해서**


### pull 땡기는 법

> 가장 앞서있는 브랜치를 땡겨주시면 됩니다

- git remote add pmorigin(별칭) (URL) = 주소등록
- git remote get-url 확인할URL = URL확인하는법
- **git pull pmorigin develop(pull받을 브랜치이름)** = 그 브랜치로 주소에있는게 pull 됩니다
- 변동사항이 커밋된 상태로 오기때문에 내 레포에 알리려면 바로 push 해주면 됩니다


### 컨플릭트 났을때 대응방법


어떤 변경사항이 생기기 전에 무조건 pull을 받습니다
- git pull pmorigin develop(pull받을 브랜치이름) = 그 브랜치로 주소에있는게 pull 됩니다



- 컨플릭트가 나면 해결후 다시 git flow feature finish해주셔야 됩니다

