const CONFIG = require("../config/Config");

const { API_URL, TOKEN } = CONFIG;

const token = localStorage.getItem("token") || "";

export const login = async (body) => {
  let response;
  try {
    response = await fetch(`${API_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response) return response.json();
  } catch (error) {
    throw error;
  }
};

export const CreateDepartment = async (dept) => {
  let response;
  try {
    response = await fetch(`${API_URL}/dept/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ name: dept }),
    });
    if (response) return response.json();
  } catch (error) {
    throw error;
  }
};

export const getAllUsers = async () => {
  let response;
  try {
    response = await fetch(`${API_URL}/user/getAll`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (response.status === 200) return response.json();
    if (response.status === 401) {
      localStorage.removeItem("token");
    }
  } catch (error) {
    throw error;
  }
};

export const getDepartments = async () => {
  let response;
  try {
    response = await fetch(`${API_URL}/dept/getAll`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (response.status === 200) return response.json();
    if (response.status === 401) {
      localStorage.removeItem("token");
    }
  } catch (error) {
    throw error;
  }
};

export const CreateModule = async (body) => {
  let response;
  try {
    response = await fetch(`${API_URL}/module/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    });
    if (response) return response.json();
  } catch (error) {
    throw error;
  }
};

export const getAllModule = async (department) => {
  let response;
  try {
    response = await fetch(
      `${API_URL}/module/getAll?department=${department}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    if (response.status === 200) return response.json();
    if (response.status === 401) {
      localStorage.removeItem("token");
    }
  } catch (error) {
    throw error;
  }
};

export const CreateTool = async (body) => {
  let response;
  try {
    response = await fetch(`${API_URL}/tool/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    });
    if (response) return response.json();
  } catch (error) {
    throw error;
  }
};

export const getAllTools = async (department, module) => {
  let response;
  try {
    response = await fetch(
      `${API_URL}/tool/getAll?department=${department}&&module=${module}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    if (response.status === 200) return response.json();
    if (response.status === 401) {
      localStorage.removeItem("token");
    }
  } catch (error) {
    throw error;
  }
};

export const getAllProjects = async (department) => {
  let response;
  try {
    response = await fetch(
      `${API_URL}/project/getAll?department=${department}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    if (response.status === 200) return response.json();
    if (response.status === 401) {
      localStorage.removeItem("token");
    }
  } catch (error) {
    throw error;
  }
};

export const getOneProject = async (id) => {
  let response;
  try {
    response = await fetch(`${API_URL}/project/getOne/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (response) return response.json();
  } catch (error) {
    throw error;
  }
};

export const addProjModule = async (body) => {
  let response;
  try {
    response = await fetch(`${API_URL}/project/addModule`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    });
    if (response.status === 200) return response.json();
  } catch (error) {
    throw error;
  }
};

export const addsNewUser = async (body) => {
  let response;
  try {
    response = await fetch(`${API_URL}/user/addUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    });
    if (response.status === 200) return response.json();
  } catch (error) {
    throw error;
  }
};

export const getProjectModule = async (projectId, moduleId) => {
  let response;
  try {
    response = await fetch(
      `${API_URL}/project/module?projectId=${projectId}&module=${moduleId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    if (response.status === 200) return response.json();
  } catch (error) {
    throw error;
  }
};

export const assignDevModule = async (body) => {
  let response;
  try {
    response = await fetch(`${API_URL}/project/addDeveloper`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    });
    if (response.status === 200) return response.json();
  } catch (error) {
    throw error;
  }
};

export const createProjModuleTask = async (body) => {
  let response;
  try {
    response = await fetch(`${API_URL}/task/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    });
    if (response.status === 200) return response.json();
  } catch (error) {
    throw error;
  }
};

export const getProjModuleTask = async (project, moduleId) => {
  let response;
  try {
    response = await fetch(`${API_URL}/task/getAll?Project=${project}&module=${moduleId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (response.status === 200) return response.json();
  } catch (error) {
    throw error;
  }
};

export const addProject = async (body) => {
  let response;
  try {
    response = await fetch(`${API_URL}/project/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    });
    if (response.status === 200) return response.json();
  } catch (error) {
    throw error;
  }
};

export const getProjTasks = async (project) => {
  let response;
  try {
    response = await fetch(`${API_URL}/task/getAllByProj?id=${project}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (response.status === 200) return response.json();
  } catch (error) {
    throw error;
  }
};

