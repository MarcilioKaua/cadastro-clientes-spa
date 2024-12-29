package com.example.cadastro_cliente_api.service;

import com.example.cadastro_cliente_api.model.Endereco;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ViaCepService {

    public Endereco consultarCep(String cep) {
        String url = "https://viacep.com.br/ws/" + cep + "/json/";
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Endereco> response = restTemplate.getForEntity(url, Endereco.class);
        if (response.getBody() != null && response.getBody().getCep() != null) {
            return response.getBody();
        }
        throw new RuntimeException("CEP inválido ou não encontrado");
    }
}
