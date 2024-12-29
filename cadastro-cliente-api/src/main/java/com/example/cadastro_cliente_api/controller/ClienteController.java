package com.example.cadastro_cliente_api.controller;

import com.example.cadastro_cliente_api.exception.EmailDuplicadoException;
import com.example.cadastro_cliente_api.model.Cliente;
import com.example.cadastro_cliente_api.model.Endereco;
import com.example.cadastro_cliente_api.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cliente")
public class ClienteController {
    @Autowired
    private ClienteService clienteService;

    @GetMapping("/listar")
    public List<Cliente> listarClientes(@RequestParam(value = "nome", required = false) String nome) {
        return clienteService.listarClientes(nome);
    }

    @PostMapping("/salvar")
    public Cliente salvarCliente(@RequestBody Cliente cliente) {
        return clienteService.salvarCliente(cliente);
    }

    @GetMapping("/{id}")
    public Cliente buscarCliente(@PathVariable Long id) {
        return clienteService.buscarClientePorId(id);
    }

    @PutMapping("/{id}")
    public Cliente editarCliente(@PathVariable Long id, @RequestBody Cliente cliente) {
        cliente.setId(id);
        return clienteService.salvarCliente(cliente);
    }

    @DeleteMapping("/{id}")
    public void excluirCliente(@PathVariable Long id) {
        clienteService.excluirCliente(id);
    }

    @PostMapping("/buscarEndereco")
    public Endereco buscarEndereco(@RequestParam String cep) {
        return clienteService.consultarEndereco(cep);
    }

    @ExceptionHandler(EmailDuplicadoException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public String handleEmailDuplicadoException(EmailDuplicadoException ex) {
        return ex.getMessage();
    }
}
