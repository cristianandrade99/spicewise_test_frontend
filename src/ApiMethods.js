exports.createDBItem = async (newItem) => {
    try {
        const url = 'http://localhost:3001/api/v1/tasks';
        const answer = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(newItem),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const jsonAns = await answer.json();
        return jsonAns.body;
    }
    catch (error) {
        console.log(error);
    }
};

exports.getAlltasks = async () => {
    try {
        const url = 'http://localhost:3001/api/v1/tasks';
        const answer = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const jsonAns = await answer.json();
        return jsonAns.body;
    }
    catch (error) {
        console.log(error);
    }
};

exports.deleteDBItem = async (id) => {
    try {
        const url = 'http://localhost:3001/api/v1/tasks/' + id;
        const answer = await fetch(url, {
            method: 'DELETE'
        });
        const jsonAns = await answer.json();
        return jsonAns.body;
    }
    catch (error) {
        console.log(error);
    }
};

exports.getDBItem = async (id) => {
    try {
        const url = 'http://localhost:3001/api/v1/tasks/' + id;
        const answer = await fetch(url, {
            method: 'GET'
        });
        const jsonAns = await answer.json();
        return jsonAns.body;
    }
    catch (error) {
        console.log(error);
    }
};

exports.updateDBItem = async (task) => {
    try {
        const url = 'http://localhost:3001/api/v1/tasks/' + task.id;
        const answer = await fetch(url, {
            method: 'PATCH',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const jsonAns = await answer.json();
        return jsonAns.body;
    }
    catch (error) {
        console.log(error);
    }
};